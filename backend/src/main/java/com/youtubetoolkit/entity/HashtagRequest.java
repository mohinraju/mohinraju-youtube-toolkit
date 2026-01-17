package com.youtubetoolkit.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "hashtag_requests")
public class HashtagRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String topic;

    @Column(name = "hashtag_count", nullable = false)
    private int hashtagCount;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public HashtagRequest() {
    }

    public HashtagRequest(Long id, String topic, int hashtagCount, LocalDateTime createdAt) {
        this.id = id;
        this.topic = topic;
        this.hashtagCount = hashtagCount;
        this.createdAt = createdAt;
    }

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public int getHashtagCount() {
        return hashtagCount;
    }

    public void setHashtagCount(int hashtagCount) {
        this.hashtagCount = hashtagCount;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
