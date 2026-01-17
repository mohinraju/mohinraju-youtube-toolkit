package com.youtubetoolkit.controller;

import com.youtubetoolkit.dto.ThumbnailRequestDTO;
import com.youtubetoolkit.dto.ThumbnailResponseDTO;
import com.youtubetoolkit.service.ThumbnailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/thumbnail")
public class ThumbnailController {

    @Autowired
    private ThumbnailService thumbnailService;

    @PostMapping("/extract")
    public ResponseEntity<ThumbnailResponseDTO> extractThumbnail(@RequestBody ThumbnailRequestDTO request) {
        return ResponseEntity.ok(thumbnailService.extractThumbnail(request));
    }
}
