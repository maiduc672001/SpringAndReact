package com.example.demo.Repository;

import com.example.demo.Entity.CartEntity;
import com.example.demo.Entity.CommodityEntity;
import com.example.demo.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<CartEntity,Long> {
CartEntity findOneByUserEntity(UserEntity entity);
}
