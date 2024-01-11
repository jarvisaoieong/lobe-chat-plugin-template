import { manClothes, womanClothes } from '@/data';
import { RequestData, ResponseData } from '@/type';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { gender, mood } = (await req.json()) as RequestData;

  const clothes = gender === 'man' ? manClothes : womanClothes;

  const result: ResponseData = {
    clothes: mood ? clothes[mood] : Object.values(clothes).flat(),
    mood,
    today: Date.now(),
  };

  return new Response(JSON.stringify(result));
}
