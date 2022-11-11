package probandoMP.probandoMP.Service;

import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import probandoMP.probandoMP.DTO.PreferenceDTO;
import java.util.ArrayList;
import java.util.List;

@Service
public class MpService {


    public ResponseEntity nuevaPreferencia (PreferenceDTO preferenceDTO) throws MPException, MPApiException {

    MercadoPagoConfig.setAccessToken(preferenceDTO.getAccessToken());
    // Crea un objeto de preferencia
    PreferenceClient client = new PreferenceClient();
    // Crea un ítem en la preferencia
    List<PreferenceItemRequest> items = new ArrayList<>();
    PreferenceItemRequest item =
            PreferenceItemRequest.builder()
                    .title(preferenceDTO.getItems().getTitle())
                    .quantity(preferenceDTO.getItems().getQuantity())
                    .unitPrice(preferenceDTO.getItems().getPrice())
                    .build();
		items.add(item);
    PreferenceRequest request = PreferenceRequest.builder().items(items).build();
        return ResponseEntity.ok(client.create(request));
    }
}
