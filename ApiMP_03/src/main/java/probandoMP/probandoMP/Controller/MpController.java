package probandoMP.probandoMP.Controller;

import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import probandoMP.probandoMP.DTO.CompraDTO;
import probandoMP.probandoMP.DTO.PreferenceDTO;
import probandoMP.probandoMP.Service.MpService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
@RequestMapping("/reference")
@CrossOrigin
public class MpController {

    @Autowired
    MpService mpService;

/*    @PostMapping(value = "/new" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity nuevaPreference (@RequestBody PreferenceDTO preferenceDTO)
            throws MPException, MPApiException {
        return mpService.nuevaPreferencia(preferenceDTO);
    }*/

    @PostMapping("/new")
    public ResponseEntity nuevaPreference (@RequestBody PreferenceDTO preferenceDTO)
            throws MPException, MPApiException {
        return mpService.nuevaPreferencia3(preferenceDTO);
    }


    @GetMapping("/success")
    public void compra( @RequestParam("collection_status") String collectionStatus ,
                          @RequestParam("preference_id") String preferenceId ,
                          @RequestParam("payment_id") String paymentId,
                          HttpServletResponse resp) throws IOException {
        CompraDTO compra = new CompraDTO();
        compra.setStatus(collectionStatus);
        compra.setPreferenceId(preferenceId);
        compra.setPaymentId(paymentId);
        System.out.println(compra.toString());
        resp.sendRedirect("http://localhost:8080");
    }
}
