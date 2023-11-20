package de.github.poundflag.agileharmony.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import de.github.poundflag.agileharmony.model.Release;

@EnableJpaRepositories
public interface ReleaseRepository extends JpaRepository<Release, String> {
}
