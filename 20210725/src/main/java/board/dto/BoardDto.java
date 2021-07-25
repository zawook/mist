package board.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class BoardDto {
	private int num;
	private String title;
	private String contents;
	private int hit;
	private String writeId;
	private LocalDateTime writeTime;
	private LocalDateTime updateTime;
}
