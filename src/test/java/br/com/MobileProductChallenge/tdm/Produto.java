package br.com.MobileProductChallenge.tdm;

public class Produto {

	private static String code;
	private static String Description;
	private static String Packing;
	private static String Amount;
	private static String UnitValue;
	private static String Lot;

	public static String getCode() {
		return code;
	}

	public static void setCode(String code) {
		Produto.code = code;
	}

	public static String getDescription() {
		return Description;
	}

	public static void setDescription(String description) {
		Description = description;
	}

	public static String getPacking() {
		return Packing;
	}

	public static void setPacking(String packing) {
		Packing = packing;
	}

	public static String getAmount() {
		return Amount;
	}

	public static void setAmount(String amount) {
		Amount = amount;
	}

	public static String getUnitValue() {
		return UnitValue;
	}

	public static void setUnitValue(String unitValue) {
		UnitValue = unitValue;
	}

	public static String getLot() {
		return Lot;
	}

	public static void setLot(String lot) {
		Lot = lot;
	}

}
