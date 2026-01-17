package com.youtubetoolkit.service;

import com.youtubetoolkit.dto.HashtagRequestDTO;
import com.youtubetoolkit.dto.HashtagResponseDTO;
import com.youtubetoolkit.entity.HashtagRequest;
import com.youtubetoolkit.repository.HashtagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class HashtagService {

    @Autowired
    private HashtagRepository hashtagRepository;

    public HashtagResponseDTO generateHashtags(HashtagRequestDTO request) {
        // Validate input
        if (request.getTopic() == null || request.getTopic().trim().isEmpty()) {
            throw new IllegalArgumentException("Topic cannot be empty");
        }
        if (request.getCount() < 25 || request.getCount() > 100) {
            throw new IllegalArgumentException("Hashtag count must be between 25 and 100");
        }

        // Generate hashtags
        List<String> generatedHashtags = generateList(request.getTopic(), request.getCount());

        // Save history
        HashtagRequest entity = new HashtagRequest();
        entity.setTopic(request.getTopic());
        entity.setHashtagCount(request.getCount());
        hashtagRepository.save(entity);

        return new HashtagResponseDTO(request.getTopic(), generatedHashtags);
    }

    private List<String> generateList(String topic, int count) {
        Set<String> hashtags = new HashSet<>();
        String cleanTopic = topic.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String[] words = topic.trim().split("\\s+");

        // 1. Direct topic variations
        hashtags.add("#" + cleanTopic);
        hashtags.add("#" + cleanTopic + "tutorial");
        hashtags.add("#" + cleanTopic + "tips");
        hashtags.add("#" + cleanTopic + "guide");
        hashtags.add("#" + cleanTopic + "course");
        hashtags.add("#learn" + cleanTopic);
        hashtags.add("#mastering" + cleanTopic);
        hashtags.add("#" + cleanTopic + "forbeginners");
        hashtags.add("#" + cleanTopic + "advanced");
        hashtags.add("#" + cleanTopic + "explained");

        // 2. Word-based combinations
        for (String word : words) {
            String cleanWord = word.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
            if (!cleanWord.isEmpty()) {
                hashtags.add("#" + cleanWord);
                hashtags.add("#" + cleanWord + "video");
                hashtags.add("#best" + cleanWord);
                hashtags.add("#top" + cleanWord);
            }
        }

        // 3. General Tech/YouTube Growth tags (Filler to ensure count)
        String[] genericTags = {
                "#youtube", "#youtuber", "#subscribe", "#youtubelikes", "#youtubevide",
                "#youtubemarketing", "#youtubeviews", "#instavideo", "#instayoutube",
                "#breaking", "#viral", "#trending", "#tech", "#technology", "#coding",
                "#programming", "#developer", "#software", "#webdevelopment", "#education",
                "#learning", "#onlinelearning", "#tutorial", "#howto", "#diy",
                "#motivation", "#inspiration", "#goals", "#career", "#growth",
                "#business", "#marketing", "#digitalmarketing", "#socialmedia",
                "#contentcreator", "#video", "#vlog", "#dailyvlog", "#life", "#fun"
        };

        // Add generic tags
        for (String tag : genericTags) {
            hashtags.add(tag);
        }

        // Add topic + generic combinations if we still need more
        for (String tag : genericTags) {
            hashtags.add(tag + cleanTopic);
        }

        // Convert to list and trim to requested count
        List<String> result = new ArrayList<>(hashtags);
        Collections.shuffle(result);

        if (result.size() > count) {
            return result.subList(0, count);
        }
        return result;
    }
}
