package br.com.MobileProductChallenge.page;

import org.openqa.selenium.By;

public class HomePage {

	public static By BOX_PRODUTO = By.id("br.com.pztec.estoque:id/linha_parte1");

	public static By BTN_NEW = By.id("br.com.pztec.estoque:id/Button1");

	public static By LBL_CODE = By.id("br.com.pztec.estoque:id/txt_codigo");
	public static By LBL_DESCRIPTION = By.id("br.com.pztec.estoque:id/txt_descricao");
	public static By LBL_PACKING = By.id("br.com.pztec.estoque:id/txt_unidade");
	public static By LBL_AMOUNT = By.id("br.com.pztec.estoque:id/txt_quantidade");
	public static By LBL_UNIT_VALUE = By.id("br.com.pztec.estoque:id/txt_valunit");
	public static By LBL_LOT = By.id("br.com.pztec.estoque:id/txt_lote");

	public static By BTN_DELETE = By.id("br.com.pztec.estoque:id/deletar");
	public static By BTN_EDIT = By.id("br.com.pztec.estoque:id/editar");
	public static By BTN_AMOUNT_PLUS = By.id("br.com.pztec.estoque:id/entrada");
	public static By BTN_AMOUNT_LESS = By.id("br.com.pztec.estoque:id/saida");
	public static By BTN_DELETE_YES = By.id("android:id/button1");
}
