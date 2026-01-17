package com.youtubetoolkit.dto;

public class HashtagRequestDTO {
    private String topic;
    private int count;

    public HashtagRequestDTO() {
    }

    public HashtagRequestDTO(String topic, int count) {
        this.topic = topic;
        this.count = count;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
