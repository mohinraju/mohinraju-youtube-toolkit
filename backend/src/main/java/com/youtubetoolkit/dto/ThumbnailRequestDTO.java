package com.youtubetoolkit.dto;

public class ThumbnailRequestDTO {
    private String youtubeUrl;

    public ThumbnailRequestDTO() {
    }

    public ThumbnailRequestDTO(String youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    }

    public String getYoutubeUrl() {
        return youtubeUrl;
    }

    public void setYoutubeUrl(String youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    }
}
