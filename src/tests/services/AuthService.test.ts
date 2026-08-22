import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AuthService } from '../../services/authService';
import { AuthRepository } from '../../repositories/AuthRepository';

describe('AuthService', () => {
  let authService: AuthService;
  let repository: AuthRepository;

  beforeEach(() => {
    repository = new AuthRepository();
    // Using simple mock approach instead of vi.mock for clarity
    repository.findUserByEmail = vi.fn();
    repository.addUser = vi.fn();
    repository.setCurrentSession = vi.fn();
    authService = new AuthService(repository);
  });

  describe('registerUser', () => {
    it('should register a new user when email does not exist', () => {
      vi.mocked(repository.findUserByEmail).mockReturnValue(undefined);

      const result = authService.registerUser('Test', 'test@test.com', '123456');

      expect(result.success).toBe(true);
      expect(result.user?.email).toBe('test@test.com');
      expect(repository.addUser).toHaveBeenCalledOnce();
      expect(repository.setCurrentSession).toHaveBeenCalledOnce();
    });

    it('should fail to register if local provider and email exists', () => {
      vi.mocked(repository.findUserByEmail).mockReturnValue({
        id: '1', name: 'Test', email: 'test@test.com', picture: '', provider: 'local', registeredAt: ''
      });

      const result = authService.registerUser('Test', 'test@test.com', '123456');

      expect(result.success).toBe(false);
      expect(result.error).toBe('Ya existe una cuenta con este correo electrónico.');
      expect(repository.addUser).not.toHaveBeenCalled();
    });
  });

  describe('loginUser', () => {
    it('should fail if user is not found', () => {
      vi.mocked(repository.findUserByEmail).mockReturnValue(undefined);

      const result = authService.loginUser('test@test.com', '123456');

      expect(result.success).toBe(false);
      expect(result.error).toContain('No se encontró ninguna cuenta');
    });

    it('should fail if password does not match for local provider', () => {
      vi.mocked(repository.findUserByEmail).mockReturnValue({
        id: '1', name: 'Test', email: 'test@test.com', password: 'correct', picture: '', provider: 'local', registeredAt: ''
      });

      const result = authService.loginUser('test@test.com', 'wrong');

      expect(result.success).toBe(false);
      expect(result.error).toContain('Contraseña incorrecta');
    });

    it('should succeed with correct credentials', () => {
      vi.mocked(repository.findUserByEmail).mockReturnValue({
        id: '1', name: 'Test', email: 'test@test.com', password: 'correct', picture: '', provider: 'local', registeredAt: ''
      });

      const result = authService.loginUser('test@test.com', 'correct');

      expect(result.success).toBe(true);
      expect(result.user?.email).toBe('test@test.com');
      expect(repository.setCurrentSession).toHaveBeenCalledOnce();
    });
  });
});
