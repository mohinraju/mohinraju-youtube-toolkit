package com.youtubetoolkit.repository;

import com.youtubetoolkit.entity.HashtagRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HashtagRepository extends JpaRepository<HashtagRequest, Long> {
}
