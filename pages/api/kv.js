import { createClient } from '@vercel/kv';
// import type { VercelRequest, VercelResponse } from '@vercel/node';
// import { GiftOption } from '../types/GiftOption';

// interface Data {
//   gifts: Record<string, unknown>;
// }

// export {}

// export class GiftClient {
//   client: VercelKV
//   constructor() {
//     this.client = createClient({
//       url: process.env.NODE_ENV,
//       token: process.env.
//     })
//   }

//   async getAllGifts(): Promise<Record<string, unknown> | null> {
//     try {
//       const gifts = await this.client.hgetall('gift:list');
//       return gifts;
//     } catch (error) {
//       console.log(error)
//       return null;
//     }
//   }

//   async setGift(gift: GiftOption): Promise<null> {
//     try {
//       await this.client.hset('gift:list', { [gift.index]: gift})
//       return null;
//     } catch (error) {
//       console.log(error)
//       return null
//     }
//   }
// }


export default async function handler(
  request,
  response,
) {
  const giftsClient = createClient({
    url: process.env.PRODUCTS_REST_API_URL,
    token: process.env.PRODUCTS_REST_API_TOKEN,
  });
  if(request.method === 'GET') {
    const gifts = await giftsClient.hgetall('gift:list');
    return response.status(200).json(gifts);
  }
}