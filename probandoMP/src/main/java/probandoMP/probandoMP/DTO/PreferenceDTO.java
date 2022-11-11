package probandoMP.probandoMP.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class PreferenceDTO implements Serializable {
    private String accessToken = "TEST-1235297259730382-070120-a539801b79a2276295f4993844c906d8-149100949";
    private ItemDTO items;
}