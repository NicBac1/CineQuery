import React from 'react';
import MovieCarouselRow from './MovieCarouselRow.jsx';
import { useI18n } from '../contexts/I18nContext';

export default function CarouselSection({ onMovieSelect }) {
  const { t } = useI18n();
  
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8 xl:py-10 2xl:py-12 px-6 xl:px-12 2xl:px-16">
      <MovieCarouselRow title={t('featuredMovies')} fetchUrl="https://api.nickbacakos.dev/api/movies/featured" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('newReleases')} fetchUrl="https://api.nickbacakos.dev/api/movies/new-releases" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('action')} fetchUrl="https://api.nickbacakos.dev/api/movies/action" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('scifi')} fetchUrl="https://api.nickbacakos.dev/api/movies/scifi" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('comedy')} fetchUrl="https://api.nickbacakos.dev/api/movies/comedy" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('thriller')} fetchUrl="https://api.nickbacakos.dev/api/movies/thriller" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('horror')} fetchUrl="https://api.nickbacakos.dev/api/movies/horror" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('suspense')} fetchUrl="https://api.nickbacakos.dev/api/movies/suspense" onMovieSelect={onMovieSelect} />
      <MovieCarouselRow title={t('drama')} fetchUrl="https://api.nickbacakos.dev/api/movies/drama" onMovieSelect={onMovieSelect} />
    </div>
  );
}

