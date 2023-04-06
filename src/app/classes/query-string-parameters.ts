export class QueryStringParameters {

	private paramsAndValues: string[];

	constructor() {
		this.paramsAndValues = [];
	}

	public push(key: string, value: any): void {
		value = encodeURIComponent(value.toString());
		this.paramsAndValues.push([key, value].join('='));
	}

	public toString = (): string => this.paramsAndValues.join('&');
}
