package probandoMP.probandoMP.Controller;

import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import probandoMP.probandoMP.DTO.PreferenceDTO;
import probandoMP.probandoMP.Service.MpService;

@RestController
@RequestMapping("/reference")
@CrossOrigin
public class MpController {

    @Autowired
    MpService mpService;

    @PostMapping(value = "/new" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity nuevaPreference (@RequestBody PreferenceDTO preferenceDTO)
            throws MPException, MPApiException {
        return  mpService.nuevaPreferencia(preferenceDTO);
    }

}
