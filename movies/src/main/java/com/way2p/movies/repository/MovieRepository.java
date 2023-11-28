  package com.way2p.movies.repository;
  
  import com.way2p.movies.model.Movie;

import java.util.Optional;

import org.bson.types.ObjectId;
  import org.springframework.data.mongodb.repository.MongoRepository;
  
  public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    Optional<Movie> findMovieByImdbId(String id);
  }
          