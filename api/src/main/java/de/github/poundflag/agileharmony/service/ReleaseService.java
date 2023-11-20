package de.github.poundflag.agileharmony.service;

import java.util.List;

import org.springframework.stereotype.Service;

import de.github.poundflag.agileharmony.model.Release;
import de.github.poundflag.agileharmony.repository.ReleaseRepository;

@Service
public class ReleaseService {

        ReleaseRepository releaseRepository;

        public ReleaseService(ReleaseRepository releaseRepository) {
                this.releaseRepository = releaseRepository;
        }

        public List<Release> getReleases() {
                return releaseRepository.findAll();
        }
}
