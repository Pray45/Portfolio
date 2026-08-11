import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://github.com/users/Pray45/contributions", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (!res.ok) {
      throw new Error(`GitHub returned status ${res.status}`);
    }

    const html = await res.text();

    // Regex parse data-date and data-level attributes directly from GitHub DOM
    const dayRegex = /data-date="(\d{4}-\d{2}-\d{2})".*?data-level="(\d)"/gs;
    const days: { date: string; level: number }[] = [];
    let match;

    while ((match = dayRegex.exec(html)) !== null) {
      days.push({
        date: match[1],
        level: parseInt(match[2], 10),
      });
    }

    // Extract total contribution string
    const totalMatch = html.match(/([0-9,]+)\s+contributions\s+in\s+the\s+last\s+year/);
    const total = totalMatch ? totalMatch[1] : days.length.toString();

    return NextResponse.json({
      total,
      days,
    });
  } catch (error) {
    console.error("Error in /api/github route:", error);
    return NextResponse.json(
      { error: "Failed to fetch live contribution data from GitHub API" },
      { status: 500 }
    );
  }
}
