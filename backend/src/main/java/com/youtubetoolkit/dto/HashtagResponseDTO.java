package com.youtubetoolkit.dto;

import java.util.List;

public class HashtagResponseDTO {
    private String topic;
    private List<String> hashtags;

    public HashtagResponseDTO() {
    }

    public HashtagResponseDTO(String topic, List<String> hashtags) {
        this.topic = topic;
        this.hashtags = hashtags;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public List<String> getHashtags() {
        return hashtags;
    }

    public void setHashtags(List<String> hashtags) {
        this.hashtags = hashtags;
    }
}
