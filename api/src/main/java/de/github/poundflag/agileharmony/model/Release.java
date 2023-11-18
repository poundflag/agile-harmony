package de.github.poundflag.agileharmony.model;

import java.time.LocalDate;
import java.util.List;

public record Release(
    String id,
    String name,
    LocalDate startDate,
    LocalDate endDate,
    String status,
    List<Sprint> sprints
) {}