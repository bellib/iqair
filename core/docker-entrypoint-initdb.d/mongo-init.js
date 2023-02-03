print('############# Create iqair ########');

db = db.getSiblingDB('iqair')

db.createUser({
  user: 'iqair_user',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: 'iqair' }],
});


print('############# Fin iqair ########')

