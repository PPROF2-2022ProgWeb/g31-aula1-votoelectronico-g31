package com.votoElectronico.votoBack.repository;

import com.votoElectronico.votoBack.model.card.CartItem;
import com.votoElectronico.votoBack.model.card.CartItemPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository <CartItem, CartItemPK> {
}
