import AiQueryService from '../services/AiQueryService.js';
import { sendError } from '../safeError.js';

export async function aiSearch(req, res) {
  try {
    const query = (req.query.query || '').trim();
    if (!query) return res.status(400).json({ error: 'Missing query parameter' });

    const movies = await AiQueryService.search(query);
    return res.json({ movies });
  } catch (err) {
    console.error(err);
    return sendError(res, err, err?.status || 500);
  }
}


