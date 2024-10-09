"use server";

export async function fetchGithubStars() {
  const response = await fetch(
    "https://api.github.com/repos/yieldbase-ai/yieldbase",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  return response.json();
}
