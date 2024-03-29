"""second table

Revision ID: 045ce5c661ed
Revises: 39c4b4e11d26
Create Date: 2024-03-28 18:00:52.076116

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '045ce5c661ed'
down_revision: Union[str, None] = '39c4b4e11d26'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
