package com.example.demo.Repository;

import com.example.demo.Entity.CartCommodityEntity;
import com.example.demo.Entity.CommodityEntity;
import com.example.demo.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartCommodityRepository extends JpaRepository<CartCommodityEntity,Long> {
    CartCommodityEntity getByUserEntityAndCommodityEntity(UserEntity entity, CommodityEntity commodityEntity);
    List<CartCommodityEntity> getAllByUserEntity(UserEntity entity);
}
