package boat.services;

import boat.entities.Boat;
import org.springframework.stereotype.Service;
import boat.repositories.BoatRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoatService {
    private final BoatRepository repository;

    public BoatService(BoatRepository repository) {
        this.repository = repository;
        this.repository.saveAll(initialBoats());
    }

    public List<Boat> getAllBoats() {
        List<Boat> boats = new ArrayList<>();
        Iterable<Boat> items = repository.findAll();
        items.forEach(boats::add);
        return boats;
    }

    public Optional<Boat> find(Long id) {
        return repository.findById(id);
    }

    public Boat create(Boat boat) {
        return repository.save(boat);
    }

    public Optional<Boat> update(Long id, Boat boat) {
        return repository.findById(id)
                .map(oldBoat -> {
                    oldBoat.setDescription(boat.getDescription());
                    oldBoat.setName(boat.getName());
                    return repository.save(oldBoat);
                });
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private static List<Boat> initialBoats() {
        return List.of(
                new Boat("Boat 1", "This is a nice boat"),
                new Boat("Boat 2", "This is a nicer boat"),
                new Boat("Boat 3", "This is the nicest boat")
        );
    }
}
