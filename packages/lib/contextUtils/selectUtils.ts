export const removeSelectProperty = (select: object) => {
  return {
    select,
    remove(key: string) {
      this.select = JSON.parse(
        JSON.stringify(this.select, (k, v) => (k === key ? undefined : v))
      );
      return this;
    },
    value() {
      return this.select as any;
    },
  };
};
