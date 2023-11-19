package de.github.poundflag.agileharmony.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.github.poundflag.agileharmony.service.SprintService;

@RestController()
@RequestMapping("sprint")
public class SprintController {

    SprintService sprintService;

    SprintController(SprintService sprintService) {
        this.sprintService = sprintService;
    }

    @GetMapping("/{sprintId}/employees/all")
    public String getMembersFromSprint(@PathVariable String sprintId) {
        return sprintService.getAllMembersFromSprint(sprintId);
    }

}
