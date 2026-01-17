package com.youtubetoolkit.dto;

public class ThumbnailResponseDTO {
    private String videoId;
    private String thumbnailUrl;

    public ThumbnailResponseDTO() {
    }

    public ThumbnailResponseDTO(String videoId, String thumbnailUrl) {
        this.videoId = videoId;
        this.thumbnailUrl = thumbnailUrl;
    }

    public String getVideoId() {
        return videoId;
    }

    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }
}
