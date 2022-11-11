package probandoMP.probandoMP;
import com.mercadopago.MercadoPagoConfig;

import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import probandoMP.probandoMP.Service.MpService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ProbandoMpApplication {
	public static void main(String[] args) throws MPException, MPApiException {
		SpringApplication.run(ProbandoMpApplication.class, args);


		//metodo static

/*		// Crea un objeto de preferencia
		PreferenceClient client = new PreferenceClient();

		// Crea un ítem en la preferencia
		List<PreferenceItemRequest> items = new ArrayList<>();
		PreferenceItemRequest item =
				PreferenceItemRequest.builder()
						.title("Meu produto")
						.quantity(1)
						.unitPrice(new BigDecimal("100"))
						.build();
		items.add(item);

		PreferenceRequest request = PreferenceRequest.builder().items(items).build();

		client.create(request);

	*/
	}
}

