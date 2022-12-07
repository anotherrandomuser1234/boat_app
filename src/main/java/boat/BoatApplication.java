package boat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@ComponentScan
@SpringBootApplication
@EnableJpaRepositories
@EnableAutoConfiguration
public class BoatApplication {
    public static void main(String[] args) {

        SpringApplication.run(BoatApplication.class, args);
    }
}