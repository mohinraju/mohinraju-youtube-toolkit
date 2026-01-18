package com.youtubetoolkit.service;

import com.youtubetoolkit.dto.ThumbnailRequestDTO;
import com.youtubetoolkit.dto.ThumbnailResponseDTO;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ThumbnailService {

    public ThumbnailResponseDTO extractThumbnail(ThumbnailRequestDTO request) {
        if (request == null || request.getVideoUrl() == null || request.getVideoUrl().isBlank()) {
            throw new IllegalArgumentException("Video URL cannot be empty");
        }

        String videoId = extractVideoId(request.getVideoUrl());

        if (videoId == null) {
            throw new IllegalArgumentException("Invalid YouTube URL");
        }

        String thumbnailUrl = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
        return new ThumbnailResponseDTO(videoId, thumbnailUrl);
    }

    private String extractVideoId(String url) {
        String pattern = "(?<=watch\\?v=|/videos/|embed\\/|youtu.be\\/|\\/v\\/|\\/e\\/|watch\\?v%3D|watch\\?feature=player_embedded&v=|%2Fvideos%2F|embed%\u200C\u200B2F|youtu.be%2F|%2Fv%2F)[^#\\&\\?\\n]*";
        Pattern compiledPattern = Pattern.compile(pattern);
        Matcher matcher = compiledPattern.matcher(url);

        if (matcher.find()) {
            return matcher.group();
        }
        return null;
    }
}
