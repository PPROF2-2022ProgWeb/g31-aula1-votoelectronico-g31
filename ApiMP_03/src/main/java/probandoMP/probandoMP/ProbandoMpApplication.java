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

	}
}

