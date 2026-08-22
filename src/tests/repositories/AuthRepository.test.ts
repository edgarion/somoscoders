import { describe, it, expect, beforeEach } from 'vitest';
import { AuthRepository } from '../../repositories/AuthRepository';
import { RegisteredUser } from '../../types';

describe('AuthRepository', () => {
  let repository: AuthRepository;

  beforeEach(() => {
    repository = new AuthRepository();
    localStorage.clear();
  });

  it('should start with an empty user list when localStorage is empty', () => {
    const users = repository.getAllUsers();
    expect(users).toEqual([]);
  });

  it('should save and retrieve a user', () => {
    const user: RegisteredUser = {
      id: 'test-1',
      name: 'Test User',
      email: 'test@example.com',
      picture: 'test.jpg',
      provider: 'local',
      registeredAt: new Date().toISOString(),
      password: 'password123'
    };

    repository.addUser(user);
    const users = repository.getAllUsers();
    expect(users).toHaveLength(1);
    expect(users[0].email).toBe('test@example.com');
  });

  it('should set and get the current session', () => {
    const user: RegisteredUser = {
      id: 'test-2',
      name: 'Session User',
      email: 'session@example.com',
      picture: 'session.jpg',
      provider: 'local',
      registeredAt: new Date().toISOString()
    };

    repository.setCurrentSession(user);
    const session = repository.getCurrentSession();
    expect(session).toBeDefined();
    expect(session?.name).toBe('Session User');
  });

  it('should clear the session', () => {
    const user: RegisteredUser = {
      id: 'test-3',
      name: 'Session User',
      email: 'session@example.com',
      picture: 'session.jpg',
      provider: 'local',
      registeredAt: new Date().toISOString()
    };

    repository.setCurrentSession(user);
    repository.clearSession();
    const session = repository.getCurrentSession();
    expect(session).toBeNull();
  });
});
