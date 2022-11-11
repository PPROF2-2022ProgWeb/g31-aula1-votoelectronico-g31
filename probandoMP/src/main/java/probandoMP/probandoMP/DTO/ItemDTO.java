package probandoMP.probandoMP.DTO;

import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ItemDTO implements Serializable {
    String title;
    BigDecimal price;
    int quantity;
}
