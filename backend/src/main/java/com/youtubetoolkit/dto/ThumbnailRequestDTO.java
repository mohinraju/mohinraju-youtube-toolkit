package com.youtubetoolkit.dto;

public class ThumbnailRequestDTO {
    private String videoUrl;

    public ThumbnailRequestDTO() {
    }

    public ThumbnailRequestDTO(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }
}
