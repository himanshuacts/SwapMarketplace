package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.app.entities.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {

}
