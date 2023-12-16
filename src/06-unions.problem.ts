interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: 'admin' | 'user' | 'super-admin';
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // ts-expect-error dùng để check lỗi ở dòng tiếp theo
  // nếu dòng tiếp theo không có lỗi thì ts-expect-error sẽ báo
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
