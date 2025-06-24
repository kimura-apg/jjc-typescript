interface YouTubeTrendingVideo {
  id: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  viewCount: string;
  likeCount: string;
  thumbnail: string;
  description: string;
  duration: string;
}

interface YouTubeApiResponse {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      publishedAt: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
    statistics: {
      viewCount: string;
      likeCount: string;
    };
    contentDetails: {
      duration: string;
    };
  }>;
}

class YouTubeTrendingAPI {
  private apiKey: string;
  private baseUrl = "https://www.googleapis.com/youtube/v3";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * 急上昇動画一覧を取得
   * @param regionCode 地域コード (例: 'JP', 'US') デフォルト: 'JP'
   * @param maxResults 取得件数 (1-50) デフォルト: 25
   * @param categoryId カテゴリID (オプショナル)
   * @returns Promise<YouTubeTrendingVideo[]>
   */
  async getTrendingVideos(
    regionCode: string = "JP",
    maxResults: number = 25,
    categoryId?: string,
  ): Promise<YouTubeTrendingVideo[]> {
    try {
      // パラメータ構築
      const params = new URLSearchParams({
        part: "snippet,statistics,contentDetails",
        chart: "mostPopular",
        regionCode,
        maxResults: Math.min(maxResults, 50).toString(),
        key: this.apiKey,
      });

      if (categoryId) {
        params.append("videoCategoryId", categoryId);
      }

      const url = `${this.baseUrl}/videos?${params.toString()}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `YouTube API Error: ${response.status} ${response.statusText}`,
        );
      }

      const data: YouTubeApiResponse = await response.json();

      return data.items.map((item) => ({
        id: item.id,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount,
        likeCount: item.statistics.likeCount || "0",
        thumbnail: item.snippet.thumbnails.medium.url,
        description: item.snippet.description.substring(0, 150) + "...",
        duration: this.parseDuration(item.contentDetails.duration),
      }));
    } catch (error) {
      console.error("急上昇動画の取得に失敗しました:", error);
      throw error;
    }
  }

  /**
   * ISO 8601形式の動画時間を読みやすい形式に変換
   * @param duration ISO 8601形式 (例: "PT4M13S")
   * @returns 人間が読みやすい形式 (例: "4:13")
   */
  private parseDuration(duration: string): string {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "0:00";

    const hours = parseInt(match[1] || "0");
    const minutes = parseInt(match[2] || "0");
    const seconds = parseInt(match[3] || "0");

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  }

  /**
   * 数値をフォーマット (例: 1234567 -> "1.2M")
   */
  static formatNumber(num: string): string {
    const number = parseInt(num);
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number.toString();
  }
}

// 使用例
async function example() {
  const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Google Cloud ConsoleでYouTube Data API v3のAPIキーを取得
  const youtube = new YouTubeTrendingAPI(API_KEY);

  try {
    // 日本の急上昇動画トップ10を取得
    const trendingVideos = await youtube.getTrendingVideos("JP", 10);

    console.log("🔥 急上昇動画一覧:");
    trendingVideos.forEach((video, index) => {
      console.log(`\n${index + 1}. ${video.title}`);
      console.log(`   チャンネル: ${video.channelTitle}`);
      console.log(
        `   再生回数: ${YouTubeTrendingAPI.formatNumber(video.viewCount)}`,
      );
      console.log(
        `   いいね: ${YouTubeTrendingAPI.formatNumber(video.likeCount)}`,
      );
      console.log(`   時間: ${video.duration}`);
      console.log(`   URL: https://www.youtube.com/watch?v=${video.id}`);
    });

    // 特定カテゴリ（音楽: 10）の急上昇動画を取得
    const musicTrending = await youtube.getTrendingVideos("JP", 5, "10");
    console.log("\n🎵 音楽カテゴリの急上昇動画:");
    musicTrending.forEach((video, index) => {
      console.log(`${index + 1}. ${video.title} - ${video.channelTitle}`);
    });
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

// 実行
example();

export { YouTubeTrendingAPI, YouTubeTrendingVideo };
