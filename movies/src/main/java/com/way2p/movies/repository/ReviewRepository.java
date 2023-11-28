package com.way2p.movies.repository;

import com.way2p.movies.model.Review;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {

    Optional<Review> findById(String reviewId);

    void deleteById(String reviewId);
}

        