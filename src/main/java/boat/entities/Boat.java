package boat.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@ToString
@EqualsAndHashCode
public class Boat {
    private @Id @GeneratedValue Long id;
    private String name;
    private String description;

    public Boat(String name, String description) {
        this.name = name;
        this.description = description;
    }

}