package de.github.poundflag.agileharmony.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import de.github.poundflag.agileharmony.model.Release;
import de.github.poundflag.agileharmony.model.Sprint;

@Service
public class ReleaseService {
        public List<Release> getReleases() {
                ArrayList<Release> releaseList = new ArrayList<>();
                releaseList.add(new Release("1", "v 1.0",
                                LocalDate.of(2023, 10, 10),
                                LocalDate.of(2023, 10, 20),
                                "Finished",
                                List.of(
                                                new Sprint("1", "Sprint 1", "Finished"),
                                                new Sprint("2", "Sprint 2", "Finished"),
                                                new Sprint("3", "Sprint 3", "Finished"),
                                                new Sprint("4", "Sprint 4", "Finished"))));

                releaseList.add(new Release("1", "v 1.1",
                                LocalDate.of(2023, 10, 10),
                                LocalDate.of(2023, 10, 20),
                                "Running",
                                List.of(
                                                new Sprint("1", "Sprint 1", "Finished"),
                                                new Sprint("2", "Sprint 2", "Finished"),
                                                new Sprint("3", "Sprint 3", "Finished"),
                                                new Sprint("4", "Sprint 4", "Running"),
                                                new Sprint("4", "Sprint 5", "Open"))));

                releaseList.add(new Release("1", "v 1.2",
                                LocalDate.of(2023, 10, 10),
                                LocalDate.of(2023, 10, 20),
                                "Open",
                                List.of(
                                                new Sprint("1", "Sprint 1", "Open"),
                                                new Sprint("2", "Sprint 2", "Open"))));
                return releaseList;
        }
}
