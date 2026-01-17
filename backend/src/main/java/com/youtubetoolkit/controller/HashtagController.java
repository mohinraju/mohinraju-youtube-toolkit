package com.youtubetoolkit.controller;

import com.youtubetoolkit.dto.HashtagRequestDTO;
import com.youtubetoolkit.dto.HashtagResponseDTO;
import com.youtubetoolkit.service.HashtagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hashtags")
public class HashtagController {

    @Autowired
    private HashtagService hashtagService;

    @PostMapping("/generate")
    public ResponseEntity<HashtagResponseDTO> generateHashtags(@RequestBody HashtagRequestDTO request) {
        return ResponseEntity.ok(hashtagService.generateHashtags(request));
    }
}
