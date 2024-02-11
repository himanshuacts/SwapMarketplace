package com.app.service;

import com.app.dto.SwapReqDTO;
import com.app.entities.Transaction;

public interface SwapService {
	Transaction initiateSwap(Integer userId, SwapReqDTO swapRequest);

	void completeSwap(Integer transactionId);
}
