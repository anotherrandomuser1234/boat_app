package boat.controllers;

import boat.entities.Boat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import boat.services.BoatService;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/boat")
public class BoatController {

    private final BoatService boatService;

    public BoatController(BoatService boatService) {
        this.boatService = boatService;
    }
    
    @GetMapping
    public ResponseEntity<List<Boat>> getAll() {
        List<Boat> items = boatService.getAllBoats();
        return ResponseEntity.ok().body(items);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boat> find(@PathVariable("id") Long id) {
        Optional<Boat> boat = boatService.find(id);
        return ResponseEntity.of(boat);
    }

    @PostMapping
    public ResponseEntity<Boat> create(@RequestBody Boat boat) {
        Boat createdBoat = boatService.create(boat);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdBoat.getId())
                .toUri();
        return ResponseEntity.created(location).body(createdBoat);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boat> update(
            @PathVariable("id") Long id,
            @RequestBody Boat updatedBoat) {

        Optional<Boat> updated = boatService.update(id, updatedBoat);

        return updated
                .map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> {
                    Boat createdBoat = boatService.create(updatedBoat);
                    URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                            .path("/{id}")
                            .buildAndExpand(createdBoat.getId())
                            .toUri();
                    return ResponseEntity.created(location).body(createdBoat);
                });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boat> delete(@PathVariable("id") Long id) {
        boatService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
