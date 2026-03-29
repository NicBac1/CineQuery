import TmdbService from '../services/TmdbService.js';
import { sendError } from '../safeError.js';

export async function search(req, res) {
  try {
    const query = (req.query.query || '').trim();
    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter' });
    }
    // Extract language from query param, header, or default to 'en'
    const language = req.query?.lang || req.headers['accept-language']?.split(',')[0]?.split('-')[0] || 'en';
    const movies = await TmdbService.searchMovies(query, language);
    return res.json({ movies });
  } catch (err) {
    console.error(err);
    return sendError(res, err, err?.status || 500);
  }
}
