package de.github.poundflag.agileharmony.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.github.poundflag.agileharmony.model.Release;
import de.github.poundflag.agileharmony.service.ReleaseService;

@RestController()
@RequestMapping("release")
public class ReleaseController {

    ReleaseService releaseService;

    ReleaseController(ReleaseService releaseService) {
        this.releaseService = releaseService;
    }

    @GetMapping("/all")
    public List<Release> getAllReleases() {
        return releaseService.getReleases();
    }
}
